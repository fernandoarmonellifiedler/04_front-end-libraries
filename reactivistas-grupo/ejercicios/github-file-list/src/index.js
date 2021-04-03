import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const FileList = ({ files }) => (
    <table className='file-list'>
      <tbody>
        {files.map((file) => (
          <tr className='file-list-item' key={file.id}>
            <td className='filename'>{file.name}</td>
            <td className='commit'>{file.latestCommit.message}</td>
            <td className='time'>{file.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

FileList.propTypes = {
  files: PropTypes.array,
};

// function FileListItem() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <i>icon</i>
//           <p>FileName</p>
//           <p>CommitMessage</p>
//           <p>Time</p>
//         </li>
//       </ul>
//     </div>
//   );
// }

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme',
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector('#root')
);
