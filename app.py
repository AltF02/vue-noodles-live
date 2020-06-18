from flask import request, url_for
from flask_api import FlaskAPI, status, exceptions
import psycopg2
import urllib.parse as urlparse

result = urlparse.urlparse(
    "postgres://noodles:Jupiter22@noodles-bot.cimffc8jntkt.us-east-1.rds.amazonaws.com:5432/postgres"
)

conn = psycopg2.connect(
    database=result.path[1:],
    user=result.username,
    password=result.password,
    host=result.hostname,
)

cur = conn.cursor()
app = FlaskAPI(__name__)


def fetch():
    cur.execute("SELECT * FROM api.commands")

    commands_sql = cur.fetchall()
    commands = {}

    for row in commands_sql:
        commands[row[0]] = row[1]

    return commands


commands = fetch()


def command_repr(key):
    return {
        'url': request.host_url.rstrip('/') + url_for('notes_detail', key=key),
        'text': commands[key]
    }


@app.route("/", methods=['GET', 'POST'])
def notes_list():
    """
    List or create notes.
    """
    if request.method == 'POST':
        note = str(request.data.get('text', ''))
        idx = max(commands.keys()) + 1
        commands[idx] = note
        cur.execute(f"INSERT INTO api.commands(id, command) VALUES ({idx}, '{note}')")
        conn.commit()
        return command_repr(idx), status.HTTP_201_CREATED

    # request.method == 'GET'
    return [command_repr(idx) for idx in sorted(commands.keys())]


@app.route("/<int:key>/", methods=['GET', 'PUT', 'DELETE'])
def notes_detail(key):
    """
    Retrieve, update or delete note instances.
    """
    if request.method == 'PUT':
        note = str(request.data.get('text', ''))
        commands[key] = note
        return command_repr(key)

    elif request.method == 'DELETE':
        commands.pop(key, None)
        return '', status.HTTP_204_NO_CONTENT

    # request.method == 'GET'
    if key not in commands:
        raise exceptions.NotFound()
    return command_repr(key)


if __name__ == "__main__":
    app.run(debug=True)
