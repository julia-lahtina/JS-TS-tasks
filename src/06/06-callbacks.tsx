import React from 'react';

const collback = (): number => {
    alert('hey');
    return 12;
};
// window.setTimeout(collback, 1000); // мы не вызываем фукцию, а просто ее передаем


export const User = () => {

    const deleteUser = () => {
        alert("user has been deleted")
    }

    const saveUser = () => {
        alert("user has been saved")
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save
            </button>
        </div>
    )
}