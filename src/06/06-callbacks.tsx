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

    return (
        <div>Dimych
            <button onClick={() => {deleteUser()}}>delete</button>
            <button onClick={() => {}}>save
            </button>
        </div>
    )
}