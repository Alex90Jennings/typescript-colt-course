const enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.RETURNED

console.log(myStatus)