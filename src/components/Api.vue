<template>
    <button @click="request()">测试跨域</button>
</template>

<script>

export default {
    methods: {
        request() {
            let url = 'http://114.116.42.21/test.php'
            this.axios.get(url, {
                headers: {
                    Authorization: 'Token'
                }
            }).then(res => {
                console.log(res)
            }).catch(error =>
                console.log(error)
            )
        }
    }
}
</script>