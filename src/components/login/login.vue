<template>
    <div class="login-page">
        <form @submit="onSubmit">
            <div class="form-group">
                <label for="apiKeyInput">API key</label>
                <input v-model="apiKey" class="form-control" id="apiKeyInput" placeholder="Enter your API key">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    // import { HTTP } from '../../http/http-common';
    import { authService } from '../../services/auth.service'

    @Component({})
    export default class Login extends Vue {
        apiKey: string = '';

        onSubmit() {
            authService.getToken(this.apiKey);
            //
            // HTTP.get(`/3/authentication/token/new?api_key=${this.apiKey}`)
            //     .then(response => {
            //         this.getPermission(response.data.request_token);
            //     })
            //     .catch(error => console.log(error))
        }

        // getPermission(token: string) {
        //     localStorage.setItem('api_key', this.apiKey);
        //     localStorage.setItem('request_token', token);
        //     window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8080/#/home/popular`;
        // }

    }
</script>

<style lang="less">
.login-page {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    button {
        width: 100%;
    }
}
</style>

