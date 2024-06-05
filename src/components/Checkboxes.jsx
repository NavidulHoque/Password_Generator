/* eslint-disable react/prop-types */

const Checkboxes = ({onchange, state, id, contains}) => {
    return (
        <div className='flex justify-between'>
            <label className='text-white text-[20px]' htmlFor={id}>{contains}</label>
            <input type="checkbox" id={id} name={id} onChange={onchange} checked={state}/>
        </div>
    )
}

export default Checkboxes