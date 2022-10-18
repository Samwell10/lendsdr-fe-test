import { ChangeEvent,  ReactElement } from 'react';
import './Filter.scss';
import { useFetch } from '../../useFetch';
interface Props{
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}
interface userdata {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: number;
    createdAt: string;

}
const Filter = ({onChange}: Props): ReactElement => {
    const [Data, loading] = useFetch<userdata[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users', []);
    return ( 
        <div className="filter">
                <div className="filter-organisation">
                    <label>Organisation</label><br></br>
                    <select name='organisation'>
                        <optgroup>
                            {Data.map((organisation) =>{
                                return(
                                    <option value={organisation.orgName}>{organisation.orgName}</option>
                                )
                            })}
                        </optgroup>
                    </select>
                </div>
                <div className="filter-text">
                    <label>Username</label><br></br>
                    <input
                    name='username'
                    type='text'
                    ></input>
                </div>
                <div className="filter-text">
                    <label>Email</label><br></br>
                    <input
                    name='email'
                    type='text'
                    ></input>
                </div>
                <div className="filter-text">
                    <label>Date</label><br></br>
                    <input
                    name="date"
                    type='date'
                    ></input>
                </div>
                <div className="filter-text">
                    <label>Phone Number</label><br></br>
                    <input
                    name='phone'
                    type='number'
                    ></input>
                </div>
                <div className="filter-organisation">
                    <label>Status</label><br></br>
                    <select name='status'>
                        <optgroup>
                            <option>kkkk</option>
                        </optgroup>
                    </select>
                </div>

                <div className="filter-buttons">
                    <button className='reset-button'>Reset</button>
                    <button className='filter-button'>Filter</button>
                </div>
            
        </div>
     );
}
 
export default Filter;