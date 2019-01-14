'use strict';

const team = {
    members: ['Jonh', 'Andew'],
    teamName: 'Ugly Dragon',
    teamSummary () {
        // return this.members.map(function(member) {
        //     return `${member} is on the  team ${this.teamName}`;
        // }.bind(this));

        // const self = this;
        // return this.members.map(function(member) {
        //     return `${member} is on the  team ${self.teamName}`;
        // });

        return this.members.map((member) => {
            return `${member} is on the  team ${this.teamName}`;
        });
    }
};

console.log(team.teamSummary());
