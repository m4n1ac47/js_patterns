class Complaints {
    constructor() {
        this.complains = []
    }

    reply(comlaint) {}

    add(complaint) {
        this.complains.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Vladinel', 'service', 'недоступет'))
console.log(registry.register('Elena', 'product', 'вылазит ошибка'))
