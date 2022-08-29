import React, {useRef} from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string) => void
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const product = productInputRef.current!.value
        const quantity = Number(quantityInputRef.current!.value)
        onAddItem(product, quantity)
        productInputRef.current!.value = ""
        quantityInputRef.current!.value = "1"
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="honeydew" ref={productInputRef}></input>
            <input type="number" min={0} placeholder="0" ref={quantityInputRef}></input>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm