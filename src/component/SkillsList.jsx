import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import htmlcsslogo from "../static/images/htmlcsslogo.png"
import jslogo from "../static/images/jslogo.png"
import reactlogo from "../static/images/reactlogo.png"
import materialuilogo from "../static/images/materialuilogo.png"
import nodelogo from "../static/images/nodelogo.png"
import expresslogo from "../static/images/expresslogo.png"
import mongodblogo from "../static/images/mongodblogo.png"
import sqllogo from "../static/images/sqllogo.png"


export function FrontEndSkillsList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#212121' }}>
          <ListItem  sx={{display: "flex", alignItems: "center"}}>
            <ListItemAvatar>
              <Avatar alt="Html Css logo" src={htmlcsslogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee'}}/>
            </ListItemAvatar>
            <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
              primary="HTML/CSS"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{display: "flex", alignItems: "center"}}>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={jslogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee'}}/>
            </ListItemAvatar>
            <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
              primary="JAVASCRIPT"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{display: "flex", alignItems: "center"}}>
            <ListItemAvatar>
              <Avatar alt="React logo" src={reactlogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee'}}/>
            </ListItemAvatar>
            <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
              primary="REACT.JS"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem sx={{display: "flex", alignItems: "center"}}>
            <ListItemAvatar>
              <Avatar alt="MaterialUI logo" src={materialuilogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee'}}/>
            </ListItemAvatar>
            <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
              primary="MATERIAL UI"
            />
          </ListItem>
        </List>
    );
}


export function BackEndSkillsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#212121' }}>
      <ListItem sx={{display: "flex", alignItems: "center"}}>
        <ListItemAvatar>
          <Avatar alt="Nodejs logo" src={nodelogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee'}}/>
        </ListItemAvatar>
        <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
          primary="NODE.JS"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem sx={{display: "flex", alignItems: "center"}}>
        <ListItemAvatar>
          <Avatar alt="Expressjs logo" src={expresslogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee' }}/>
        </ListItemAvatar>
        <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
          primary="EXPRESS.JS"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem sx={{display: "flex", alignItems: "center"}}>
        <ListItemAvatar>
          <Avatar alt="MongoDB logo" src={mongodblogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee' }}/>
        </ListItemAvatar>
        <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
          primary="MONGO DB"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem sx={{display: "flex", alignItems: "center"}}>
        <ListItemAvatar>
          <Avatar alt="MySQL logo" src={sqllogo}  sx={{ width: 56, height: 56, bgcolor: '#eeeeee' }}/>
        </ListItemAvatar>
        <ListItemText sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}
          primary="MYSQL"
        />
      </ListItem>
    </List>
);
}