import React, { useReducer } from 'react';

const Form = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        gander: '',
        language: '',
        quantity: 0,
        feedback: '',

    };

    const reducer = (state, action) => {
        if (action.type === 'input') {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        }
    };


    const [state, dispatch] = useReducer(reducer, initialState)

    const submitForm = (event) => {
        event.preventDefault();
        console.log(state);
    }




    return (
        <section className="p-6 bg-black">
            <form
                className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                onSubmit={submitForm}>
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Personal Inormation</p>
                    <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-sm">First name</label>
                        <input id="firstname" name='firstName' type="text" placeholder="First name"
                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">Last name</label>
                        <input id="lastname" name='lastName' type="text"
                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" name='email' type="email" placeholder="Email"

                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div>
                        <div className="mr-3">Gender</div>
                        <label className="flex radio">
                            <input id='male' type="radio" name="gander" value='male'
                                onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            />
                            <div className="title px-2">male</div>
                        </label>
                        <label className="flex radio">
                            <input id='female' type="radio" name="gander" value='female'
                                onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            />
                            <div className="title px-2">female</div>
                        </label>
                    </div>
                    <br />

                    <div>
                        <label htmlFor="language">Language?</label>
                        <select name='language' id='language'
                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            className="select select-info w-full max-w-xs">
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id='quantity' name='quantity'

                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                        />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="feedback" className="text-sm">feedback</label>
                        <textarea id="feedback" name='feedback'

                            onBlur={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}

                            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                    </div>

                </div>
                <input type="submit" value="Submit" className='bg-green-800 p-5' />
            </form>
        </section>
    );
};

export default Form;