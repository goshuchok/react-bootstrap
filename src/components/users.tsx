import React, { FC } from 'react';
import { Container, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import velazquez from '../velazquez.jpg';

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Users: FC = () => {
  return (
    <div>
      <Container>
        <h1>Users</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user}>
                <td>1</td>
                <td>
                  <Image width={50} height={50} src={velazquez} roundedCircle />
                  Mark
                </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Front End</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Users;
