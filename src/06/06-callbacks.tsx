import React, {ChangeEvent, MouseEvent} from 'react';

const collback = (): number => {
    alert('hey');
    return 12;
};
// window.setTimeout(collback, 1000); // мы не вызываем фукцию, а просто ее передаем


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert("user has been saved")
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <button name={'delete'} onClick={deleteUser}>x</button>
            <button name={'save'} onClick={deleteUser}>x</button>
            <input onChange={onAgeChanged} type={'number'}/>
        </div>
    )
}