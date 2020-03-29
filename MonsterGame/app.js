new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false, 
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        }, 
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage
            });
            if (this.checkWin()) return;

            this.monsterAttacks();
        }, 
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if (this.checkWin()) return;

            this.monsterAttacks();
        }, 
        heal: function() {
            if( this.playerHealth +10 <100){
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for ' + 10
                });
            }
            else{
                this.playerHealth =100;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals to full health'
                });
            }
            this.monsterAttacks();

        }, 
        giveUp: function(){
            this.gameIsRunning = false;
        }, 
        monsterAttacks: function() {
            var damage = this.calculateDamage(3, 10);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max( Math.floor( Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0){
                alert('You won');
                this.gameIsRunning = false;
                return;
            }
            else if (this.playerHealth <=0){
                alert('You lost! New Game?');
                this.gameIsRunning = false;
                return;
            }
        }
    }
})