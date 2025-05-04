import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateForm from "./CreateForm";

export default function MainPage(props) {
  const [events, setEvents] = useState([]);
  const bAdmin = props.bAdmin;

  const entries = bAdmin
    ? ["id_event", "id_vol", "id_org", "name_event", "age", "description"]
    : ["name_organisation"];

  // ✅ FETCH events from backend (pointing to port 8080)
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/allEvents");
      if (!res.ok) throw new Error("Failed to fetch events");
      const body = await res.json();
      setEvents(body);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ DELETE event (pointing to port 8080)
  const deleteEntry = async (id) => {
    try {
      const result = await fetch(`http://localhost:8080/allEvents/${id}`, {
        method: 'DELETE'
      });

      if (result.status === 200) {
        setEvents(events.filter((e) => e.id_event !== id));
      } else {
        console.error("Failed to delete entry");
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  // ✅ Callback to refetch events after adding new one
  const rerenderParentCallback = () => fetchEvents();

  return (
    <div>
      <div className="text-content-title-login">
        <h1>Main Page</h1>
      </div>

      <CreateForm
        entries={entries}
        bAdmin={bAdmin}
        // ✅ Pass full URL for POST
        requestPath="http://localhost:8080/allEvents"
        rerenderParentCallback={rerenderParentCallback}
      />

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
                {bAdmin && <TableCell align="left">Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((row) => (
                <TableRow key={row.id_event}>
                  <TableCell align="left">{row.name_organisation}</TableCell>
                  <TableCell align="left">{row.id_event}</TableCell>
                  <TableCell align="left">{row.age_group}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  {bAdmin && (
                    <TableCell align="left">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => deleteEntry(row.id_event)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  )}
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
