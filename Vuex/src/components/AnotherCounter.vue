<template>
<div>
    <p>Number of clicks is: {{ stringCounter }}</p>
    <p>Counter x 2 is: {{ doubleCounter }}</p>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
}
</script>


