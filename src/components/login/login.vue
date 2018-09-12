<template>
    <div class="login-page">
        <div class="form-group">
            <label for="apiKeyInput">API key</label>
            <input v-model="apiKey" class="form-control" id="apiKeyInput" placeholder="Enter your API key">
        </div>
        <button @click="onSubmit" class="btn btn-primary">Submit</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { authService } from '../../services/auth.service';

@Component({})
export default class Login extends Vue {
    public apiKey: string = '';

    public onSubmit() {
        authService.getToken(this.apiKey);

    }
}
</script>

<style lang="less">
.login-page {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
        width: 220px;
    }
}
</style>

