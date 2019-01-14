function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

const userName = new Field('2Cool!');
const password = new Field('my_password');
const birthday = new Field('12/02/03');
const fields   = [userName, password, birthday];

const validated = fields.every((field) => field.validate());
console.log(validated);
