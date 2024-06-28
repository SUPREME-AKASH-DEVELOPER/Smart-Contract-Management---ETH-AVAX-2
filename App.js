import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AcademicRecords from './contracts/AcademicRecords.json';
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [fullName, setFullName] = useState('');
  const [grade, setGrade] = useState(0);
  const [isPassed, setIsPassed] = useState(false);
  const [subject, setSubject] = useState('');
  const [learnerAddress, setLearnerAddress] = useState('');

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = AcademicRecords.networks[networkId];
        if (deployedNetwork) {
          const instance = new web3.eth.Contract(
            AcademicRecords.abi,
            deployedNetwork && deployedNetwork.address,
          );
          setContract(instance);
        } else {
          console.error('Smart contract not deployed to detected network.');
        }
      } catch (error) {
        console.error('Error loading blockchain data:', error);
      }
    };
    loadBlockchainData();
  }, []);

  const registerLearner = async () => {
    try {
      await contract.methods.registerLearner(
        learnerAddress,
        fullName,
        grade,
        isPassed,
        subject,
      ).send({ from: account });
    } catch (error) {
      console.error('Error registering learner:', error);
    }
  };

  const fetchLearnerInfo = async () => {
    try {
      const info = await contract.methods.fetchLearnerInfo(learnerAddress).call();
      setFullName(info.fullName);
      setGrade(info.grade);
      setIsPassed(info.isPassed);
      setSubject(info.subject);
    } catch (error) {
      console.error('Error fetching learner info:', error);
    }
  };

  return (
    <div className="App">
      <h1>Academic Records</h1>
      <p>Connected Account: {account}</p>

      <div className="form">
        <h2>Register Learner</h2>
        <input
          type="text"
          placeholder="Learner Address"
          onChange={(e) => setLearnerAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade"
          onChange={(e) => setGrade(e.target.value)}
        />
        <input
          type="checkbox"
          onChange={(e) => setIsPassed(e.target.checked)}
        /> Passed
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <button onClick={registerLearner}>Register</button>
      </div>

      <div className="form">
        <h2>Fetch Learner Info</h2>
        <input
          type="text"
          placeholder="Learner Address"
          onChange={(e) => setLearnerAddress(e.target.value)}
        />
        <button onClick={fetchLearnerInfo}>Fetch Info</button>
        <p>Full Name: {fullName}</p>
        <p>Grade: {grade}</p>
        <p>Passed: {isPassed.toString()}</p>
        <p>Subject: {subject}</p>
      </div>
    </div>
  );
}

export default App;
