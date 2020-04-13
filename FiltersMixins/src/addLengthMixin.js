export const addLengthMixin = {
    computed: {
        addLength(){
            var len = this.message.length;
            var suffix = ' (' + len.toString() + ')';
            return this.message+ suffix;
        }
    }
};