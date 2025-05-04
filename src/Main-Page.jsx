import { Link } from "react-router-dom";
import Buttons from 'react-bootstrap/Button';
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
import {Component} from "react";
import {Button} from "reactstrap";
import CreateForm from "./CreateForm.jsx";

import {TextField} from "@mui/material";

export default function MainPage() {
  // State variables
  this.state = {
    events: [],
    requestPath: "allEvents",
    bAdmin: this.props.bAdmin,
};

this.state.entries = this.props.bAdmin ?
    [ "id_event","id_vol", "id_org", "name_event", "age", "description"] :
    ["name_organisation"];

// Request data
    async function componentDidMount() {
      
     componentDidMount(); {
    const eventsResp = await fetch('/allEvents');
    const eventsBody = await eventsResp.json();

    this.setState({
        events: this.allEvents,
    });
  }
};

// Handle delete
this.deleteEntry = async (id) => {
    const result = await fetch(`http://localhost:8080/allEvents/${id}`, { method: 'DELETE' });

    if (result.status === 200) {
        this.setState({
            events: this.state.events.filter((prop) => prop.id_event !== id)
        })
    }
};

// Rerender table after CRUD operations -> Request data
this.rerenderParentCallback = async () => {
    const eventsResp = await fetch('/allEvents');
    const eventsBody = await eventsResp.json();

    this.setState({
        events: eventsBody,
    });
};

  return (
    <div>
      <div className="text-content-title-login">
        <h1>Main Page</h1>
      </div>
      <div>
                <h2 className="table">
                    Oferte
                </h2>
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
                            {this.state.events.map((row) => (
                                <TableRow
                                    key={row.id_event}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        {!this.state.bAdmin && row.username === this.props.username ? <Button variant="outline-secondary" size="sm" onClick={() => {
                                            this.deleteEntry(row.id_event)
                                        }}>Sterge</Button> : null}
                                        
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
