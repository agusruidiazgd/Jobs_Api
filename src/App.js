import React, {useEffect, useState} from 'react';
import Table from './components/Table/Table';
import axios from 'axios';
import './App.scss';

function App() {

  const [users, setUsers] = useState([]);
  const[jobs, setJobs] = useState([]);

  const getPost = async () =>{
    try{
      const res = await axios.get('https://5f518d325e98480016123ada.mockapi.io/api/v1/users');
      const res2 = await axios.get('https://5f518d325e98480016123ada.mockapi.io/api/v1/jobs');
      setUsers(res.data)
      setJobs(res2.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getPost();
  },[]);

  return (
      <div className="container">
        <table className="table-jobs">
        <thead className="table-head">
            <th>ID</th>
            <th>Nombre</th>
            <th>Avatar</th>
            <th>Job</th>
            <th>Cambiar job</th>
        </thead>
        <tbody className="table-body">
          {
            users.map(user=>{
              const userJob = jobs.find(job => job.id == user.jobId);
              if(!userJob) {
                console.log(user);
                return null;
              }
              return (<Table 
                id={user.id} 
                name={user.name} 
                avatar={user.avatar}
                job={userJob.name}
              >
              <td>
                <select className="drop">
                  <option hidden>Elegir job</option>
                  {jobs.map(job =>{
                    return (
                        <option 
                          value={job.id}
                          selected={job.id == userJob.id ? 'selected' : ''}
                        >{job.name}</option>
                      )
                    })
                  }
                </select>
              </td>
              </Table>)
            })
          }       
        </tbody>
      </table>
      </div>
  
  );
}
//TODO 29-9 hacer el ONCHANGE del select y asi modificar el job :)
export default App;
