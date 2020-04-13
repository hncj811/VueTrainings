<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p> Message: {{message}} </p>
                <p> Message now reversed: {{message | reverseText}} </p>


                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->                
               <p> Message with length: {{'Tom Brady sucks!' | add-length}} </p>


                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
               <p> Message: {{message}} </p>
                <p> Message now reversed with computed method: {{reversedMsg }} </p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                 <p> Message with length from Mixin: {{ addLength }} </p>

            </div>
        </div>
    </div>
</template>

<script>
import  {addLengthMixin}from './addLengthMixin';

    export default {
        mixins: [addLengthMixin],
        data: function() {
            return{
                message: 'first msg'
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reversedMsg() {
                 return this.message.split("").reverse().join("");

            }
        }
    }
</script>

<style>
</style>
