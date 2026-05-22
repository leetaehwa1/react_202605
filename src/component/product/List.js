import { useEffect, useState } from "react";
import '../../App.css';
import { useNavigate, Link } from "react-router-dom";
import { 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Box 
} from "@mui/material";
// 에러를 유발하던 AddCircleOutline을 공식 명칭인 AddCircleOutlined로 수정했습니다.
import { Delete as DeleteIcon, AddCircleOutlined as AddCircleOutlineIcon } from '@mui/icons-material';

function ProductList(){
    let [list, setList] = useState([]);
    let navigate = useNavigate();

    // 제품 목록 조회 함수
    function getList(){
        fetch("http://localhost:3010/product")
            .then(res => res.json())
            .then(data => {
                setList(data.list || []);
            })
            .catch(err => console.error("데이터 로딩 실패:", err));
    }

    // 처음 렌더링될 때 목록 불러오기
    useEffect(() => {
        getList();
    }, []);

    // 제품 삭제 함수
    function fnDelete(productId){
        if (!window.confirm("정말 이 제품을 삭제하시겠습니까?")) return;
        
        fetch("http://localhost:3010/product/" + productId, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
           console.log("삭제 결과:", data);
            if (data.result === "success") {
                alert("성공적으로 삭제되었습니다!");
                getList(); // 삭제 후 화면 목록 새로고침
            } else {
                alert("삭제에 실패했습니다.");
            }
        })
        .catch(err => console.error("삭제 실패:", err));
    }

    return (
        <Box sx={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            {/* 타이틀 */}
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#2e7d32' }}>
                📦 등록 제품 목록
            </Typography>
            <hr style={{ marginBottom: '20px', border: '0.5px solid #e0e0e0' }}></hr>

            {/* 테이블 영역 */}
            <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden', mb: 3 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#2e7d32' }}>
                        <TableRow>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>번호</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>제품명</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>브랜드</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>가격</TableCell>
                            <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>관리</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.length > 0 ? (
                            list.map((item) => (
                                <TableRow 
                                    key={item.PRODUCT_ID} 
                                    sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}
                                >
                                    <TableCell align="center">{item.PRODUCT_ID}</TableCell>
                                    <TableCell align="center">
                                        <span
                                            onClick={() => navigate("/product/view/" + item.PRODUCT_ID)}
                                            style={{ color: '#1976d2', cursor: 'pointer', fontWeight: '500', textDecoration: 'underline' }}
                                        >
                                            {item.PRODUCT_NAME}
                                        </span>
                                    </TableCell>
                                    <TableCell align="center">{item.BRAND}</TableCell>
                                    <TableCell align="center">
                                        {item.PRICE ? `${Number(item.PRICE).toLocaleString()}원` : '0원'}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button 
                                            variant="outlined" 
                                            color="error" 
                                            size="small"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => fnDelete(item.PRODUCT_ID)} 
                                        >
                                            삭제
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                                    등록된 제품이 없습니다.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* 하단 제품 추가 버튼 */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                    variant="contained"
                    color="success"
                    component={Link} 
                    to="/product/add"
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{ fontWeight: 'bold' }}
                >
                    새 제품 추가
                </Button>
            </Box>
        </Box>
    );
}

export default ProductList;