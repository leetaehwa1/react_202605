import { useState } from "react";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Paper, 
  IconButton, 
  InputAdornment 
} from "@mui/material";
// 패키지 에러 방지를 위해 중괄호 방식으로 아이콘을 불러옵니다.
import { 
  Visibility, 
  VisibilityOff, 
  LockOutlined as LockIcon 
} from "@mui/icons-material";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기/숨기기 상태

  // 비밀번호 토글 함수
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    
    // 이 부분에 백엔드 로그인 API 호출 코드를 넣으시면 됩니다.
    console.log("로그인 시도:", { id, password });
    
    /* 예시:
    fetch("http://localhost:3010/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: id, password: password })
    })
    .then(res => res.json())
    .then(data => { ... })
    */
  };

  return (
    // Container로 화면 가운데에 적절한 너비로 가둬줍니다.
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 그림자 효과(elevation)가 들어간 카드 레이아웃 */}
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "12px",
            width: "100%",
          }}
        >
          {/* 상단 자물쇠 아이콘 배경 원 */}
          <Box
            sx={{
              margin: 1,
              backgroundColor: "#1976d2",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <LockIcon />
          </Box>

          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            로그인
          </Typography>

          {/* Form 영역 */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
            {/* 아이디 입력창 */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="아이디"
              name="id"
              autoComplete="username"
              autoFocus
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            {/* 비밀번호 입력창 (눈 아이콘 토글 포함) */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* 로그인 버튼 */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, height: "50px", fontWeight: "bold", fontSize: "16px" }}
            >
              로그인하기
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;