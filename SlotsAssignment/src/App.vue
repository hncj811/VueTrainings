<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="loadBlue">Load Blue Template</button>
                <button class="btn btn-success" @click="chosenComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="chosenComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="chosenComponent">
                   <p>Default Content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return {
                chosenComponent: 'appBlue',
                text: 'April Fools'
            }
        },
        methods: {
            loadBlue() {
                this.chosenComponent = 'appBlue';
            },
            loadGreen(){
                this.chosenComponent = 'appGreen';
            }
        }
    }
</script>

<style>
</style>
