// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract AcademicRecords {
    struct Learner {
        string fullName;
        uint grade;
        bool isPassed;
        string subject;
    }

    mapping(address => Learner) private learnerRecords;

    event LearnerAdded(address indexed learnerAddress, string fullName);

    function registerLearner(
        address learnerAddress,
        string memory fullName,
        uint grade,
        bool isPassed,
        string memory subject
    ) public {
        learnerRecords[learnerAddress] = Learner(fullName, grade, isPassed, subject);
        emit LearnerAdded(learnerAddress, fullName);
    }

    function fetchLearnerName(address learnerAddress) public view returns (string memory) {
        return learnerRecords[learnerAddress].fullName;
    }

    function fetchLearnerGrade(address learnerAddress) public view returns (uint) {
        return learnerRecords[learnerAddress].grade;
    }

    function checkLearnerPassStatus(address learnerAddress) public view returns (bool) {
        return learnerRecords[learnerAddress].isPassed;
    }

    function fetchLearnerSubject(address learnerAddress) public view returns (string memory) {
        return learnerRecords[learnerAddress].subject;
    }

    function fetchLearnerInfo(address learnerAddress)
        public
        view
        returns (
            string memory fullName,
            uint grade,
            bool isPassed,
            string memory subject
        )
    {
        Learner memory learner = learnerRecords[learnerAddress];
        return (learner.fullName, learner.grade, learner.isPassed, learner.subject);
    }
}
