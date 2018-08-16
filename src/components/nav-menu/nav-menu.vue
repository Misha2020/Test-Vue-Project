<template>
    <nav class="navbar navbar-dark bg-primary">
        <div class="nav">
            <span class="nav-item">
                <router-link class="nav-link active" to="popular">Popular</router-link>
                <!--<a class="nav-link active" href="#">Active</a>-->
            </span>
            <span class="nav-item">
                <router-link class="nav-link" to="recommendations">Recommendations</router-link>
                <!--<a class="nav-link" href="#">Link</a>-->
            </span>
        </div>
        <button class="btn btn-secondary btn-sm" @click="logout">Logout</button>
        <!--<div class="collapse navbar-collapse" id="navbarSupportedContent">-->
            <!--<ul class="navbar-nav mr-auto">-->
                <!--<li class="nav-item">-->
                    <!--&lt;!&ndash;<router-link to="popular">Popular</router-link>&ndash;&gt;-->
                    <!--<a class="nav-link" href="/popular">Popular</a> -->
                <!--</li>-->
                <!--<li class="nav-item">-->
                    <!--&lt;!&ndash;<router-link class="nav-link" to="recommendations">Recommendations</router-link>&ndash;&gt;-->
                    <!--<a class="nav-link" href="/recommendations">Recommendations</a>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<form class="form-inline my-2 my-lg-0">-->
                <!--<button @click="logout()">Logout</button>-->
            <!--</form>-->
        <!--</div>-->
    </nav>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    // import router from '../../router';

    @Component()
    export default class NavMenu extends Vue {
        public logout() {
            localStorage.clear();
            // router.push({path: '/login'})
        }
    }
</script>

<style lang="less">
    .navbar {
        margin-bottom: 25px;
    }

    .nav-item a{
        color: white;
    }
</style>