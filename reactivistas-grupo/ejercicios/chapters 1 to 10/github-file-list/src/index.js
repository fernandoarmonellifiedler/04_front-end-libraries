import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const FileList = ({ files }) => (
  <div className='container-sm container-tabla'>
    <table className='table table-dark table-striped table-hover table-bordered'>
      <tbody className='flex'>
        {files.map((file) => (
          <FileListItem file={file} />
        ))}
      </tbody>
    </table>
  </div>
);

FileList.propTypes = {
  files: PropTypes.array,
};

function FileListItem({ file }) {
  return (
    <tr className='fila' key={file.id}>
      <FileName name={file.name} type={file.type} />
      <FileCommit latestCommit={file.latestCommit.message} />
      <FileTime updated_at={file.updated_at} />
    </tr>
  );
}

function FileName({ name, type }) {
  return (
    <td className='filename'>
      <span>
        {type == 'folder' && <FontAwesomeIcon icon={faFolder} />}
        {type == 'file' && <FontAwesomeIcon icon={faFile} />}
      </span>
      <p className='name'>{name}</p>
    </td>
  );
}

function FileCommit({ latestCommit }) {
  return <td className='commit'>{latestCommit}</td>;
}

function FileTime({ updated_at }) {
  const timeString = moment(updated_at).fromNow();
  return <td className='time'>{timeString}</td>;
}

// database
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

// chackra tailwind