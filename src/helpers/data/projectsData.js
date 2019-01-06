import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
// const getCurrentUid = () => firebase.auth().currentUser.uid;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json?`)
    .then((results) => {
      const projectsObject = results.data;
      const projectsArray = [];
      if (projectsObject !== null) {
        Object.keys(projectsObject).forEach((projectId) => {
          projectsObject[projectId].id = projectId;
          projectsArray.push(projectsObject[projectId]);
        });
      }
      resolve(projectsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

// const getSingleProject = projectId => new Promise((resolve, reject) => {
//   axios.get(`${firebaseUrl}/projects/${projectId}.json`)
//     .then((result) => {
//       const singleProject = result.data;
//       singleProject.id = projectId;
//       resolve(singleProject);
//     })
//     .catch((error) => {
//       reject(error);
//     });
// });

export default {
  getAllProjects,
  // getSingleProject,
};
