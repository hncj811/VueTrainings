<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
         <p>User Age: {{userAge }}</p>

        <button @click="resetName()"> Reset Name</button>
        <button @click="resetFn()"> Reset Name (parent callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
          required: true,
          type: String,
        },
        resetFn: Function, 
        userAge: Number
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("");
        }, 
        resetName() {
            this.name = 'Max';
            this.$emit('nameWasReset', this.name);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
