import React from 'react';
import { Repository } from './styles';
import Issue from '../Issue/index';

const ListData = ({ issues }) => (
  <div>
    {issues.map(issue => (
      <Repository key={issue.id}>
        <h1>
          <Issue issue={issue} />
        </h1>
      </Repository>
    ))}
  </div>
);

export default ListData;
