import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./App.css";
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MainPage(props) {
  const [events, setEvents] = useState([]);
  const [requestPath, setRequestPath] = useState("allEvents");
  const [bAdmin] = useState(props.bAdmin);
  const entries = bAdmin
    ? ["id_event", "id_vol", "id_org", "name_event", "age", "description"]
    : ["name_organisation"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/allEvents');
      const data = await response.json();
      setEvents(data);
    };

    fetchData();
  }, []);

  const deleteEntry = async (id) => {
    const result = await fetch(`http://localhost:8080/allEvents/${id}`, {
      method: 'DELETE'
    });

    if (result.status === 200) {
      setEvents(prev => prev.filter(event => event.id_event !== id));
    }
  };

  const rerenderParentCallback = async () => {
    const response = await fetch('/allEvents');
    const data = await response.json();
    setEvents(data);
  };

  return (
    <div>
      <div className="text-content-title-login">
        <h1>Main Page</h1>
      </div>
      <div>
        <h2 className="table">Oferte</h2>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name Organisation</TableCell>
                <TableCell align="left">Id Event</TableCell>
                <TableCell align="left">Age group</TableCell>
                <TableCell align="left">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((row) => (
                <TableRow key={row.id_event}>
                  <TableCell align="left">
                    {!bAdmin && row.username === props.username && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => deleteEntry(row.id_event)}
                      >
                        Sterge
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="left">{row.id_event}</TableCell>
                  <TableCell align="left">{row.age_group}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="chenar">
        <Stack direction="horizontal" gap={1}>
          <div className="text-login">
            <Link to="/">
              <Button className="butonlogin">Back home</Button>
            </Link>
          </div>
          <div className="header-titlu-poza">
            <div className="p-2">ImpactHUB</div>
            <img src={logos} className="image-logo" alt="logos" />
          </div>
        </Stack>
      </div>
    </div>
  );
}
