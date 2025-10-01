import '../index.css'
export default function Main() {
    return <div className='main'>
        <div>
           <h1>signup</h1>
           <label>email</label><br />
           <input type="text" /><br />
           <label>password</label><br />
           <input type="password" /><br />
           <label>Reenter password</label><br />
           <input type="password" /><br />
           <button className='submit-btn'>submit</button>
        </div>
    </div>
}