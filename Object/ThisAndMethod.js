let laptop1 = {
    cpu: 'i7',
    ram: 16,
    brand: 'Apple',

    // function getConfig call method of object or can called behavior.
    getConfig: function() {  
        console.log(this.brand); // this display for invidiual of a object
    }
}

laptop1.getConfig()

let laptop2 = {
    cpu: 'i9',
    ream: 156, 
    brand: 'Microsoft',

    getConfig: function() {
        console.log(this.brand);
    }
}

laptop2.getConfig()