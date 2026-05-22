import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { 
  Button, 
  TextField, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Box 
} from '@mui/material';
// 웹팩 에러를 방지하기 위해 중괄호 방식으로 안전하게 아이콘을 불러옵니다.
import { Search as SearchIcon, AddCircleOutlined as AddCircleOutlineIcon } from '@mui/icons-material';


function StudentList(){
    let [list, setList] = useState([]);
    let [keyword, setKeyword] = useState("");

    // 데이터를 가져오는 함수
    function stuList(){
        fetch("http://localhost:3010/student?keyword=" + keyword)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list || []);
            })
            .catch(err => console.error("데이터 로딩 실패:", err));
    }

    // 엔터키를 눌렀을 때도 검색이 되도록 하는 함수
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            stuList();
        }
    };

    // 처음 렌더링될 때 전체 목록 호출 (빈 배열 []을 두어 타이핑할 때마다 호출되는 것을 방지)
    useEffect(() => {
        stuList();
    }, []);

    return (
        <Box sx={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            {/* 제목 */}
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#1976d2' }}>
                🎓 학생 관리 목록
            </Typography>
            
            {/* 검색 영역 (Flexbox 배치) */}
            <Box sx={{ display: 'flex', gap: 1, mb: 4, justifyContent: 'center', alignItems: 'center' }}>
                <TextField 
                    label="학생 이름 검색" 
                    variant="outlined" 
                    size="small"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown} // 엔터키 지원
                    sx={{ width: '300px' }}
                />
                <Button 
                    variant="contained" 
                    size="medium"
                    startIcon={<SearchIcon />}
                    onClick={stuList}
                    sx={{ height: '40px' }}
                >
                    검색
                </Button>
            </Box>

            {/* 테이블 영역 */}
            <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#1976d2' }}>
                        <TableRow>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>학번</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>이름</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>학과</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>학년</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.length > 0 ? (
                            list.map((item) => (
                                <TableRow 
                                    key={item.STU_NO}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#f5f5f5' } }}
                                >
                                    <TableCell align="center">{item.STU_NO}</TableCell>
                                    <TableCell align="center" style={{ fontWeight: '500' }}>{item.STU_NAME}</TableCell>
                                    <TableCell align="center">{item.STU_DEPT}</TableCell>
                                    <TableCell align="center">{item.STU_GRADE}학년</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                                    검색 결과가 없습니다.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* 하단 링크 영역 */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button 
                    component={Link} 
                    to="/student/add" 
                    variant="text" 
                    color="primary"
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{ fontWeight: 'bold' }}
                >
                    학생 추가하기
                </Button>
            </Box>
        </Box>
    );
}

export default StudentList;