<template>
    <main>
        <div v-if="user === null">
            <h2><a href="/auth">Log in</a></h2>
        </div>
        <div v-else>
            <h2>Bank: {{ user.economy.balance.bank }}</h2>
            <h2>Pocket: {{ user.economy.balance.pocket }}</h2>
        </div>
    </main>
</template>

<script>
import UserApi from '../../services/api/user'

export default {
    name: "Dashboard",

    data() {
        return {
            loading: true,
            user: null
        }
    },

    created() {
        UserApi.getUser()
            .then(user => {
                this.user = user
            })
            .catch(
            err => console.log(err))
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style scoped>

</style>
