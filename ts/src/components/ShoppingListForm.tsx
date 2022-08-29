import React, {useRef} from "react";

function ShoppingListForm(): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log(inputRef.current?.value)
        inputRef.current!.value = ""
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="honeydew"></input>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm