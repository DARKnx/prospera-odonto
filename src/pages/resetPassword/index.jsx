import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import userAction from '../../actions/user';

const ResetPassword = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const { id } = useParams();

  const getUser = async () => {
    var response = await userAction.get();
    const findUser = response.find(x => x._id == id);
    setUser(findUser);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleResetPassword = () => {
    
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
      Redefinição de senha ({user?.name || "nome"} - {user?.email || "email"})
      </Typography>
      <TextField
        label="Nova Senha"
        type="password"
        value={newPassword}
        onChange={handlePasswordChange}
        fullWidth
        sx={{ mb: 2, maxWidth: 400 }}
      />
      <Button variant="contained" color="primary" onClick={handleResetPassword}>
        Redefinir Senha
      </Button>
    </Box>
  );
};

export default ResetPassword;
