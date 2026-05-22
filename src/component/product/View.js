import { useNavigate, useParams } from "react-router-dom";
import '../../App.css';
import { useEffect, useState } from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProductView(){
    let[info, setInfo] = useState({});
    let { productId } = useParams();
    let navigate = useNavigate();
    console.log(productId);

    function getInfo(){
        fetch("http://localhost:3010/product/"+productId)
            .then(res => res.json())
            .then(data => {
                setInfo(data.info);
            });
    }
    useEffect(()=>{
            getInfo();
        }, [productId])
    return (
        <Box sx={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
            {/* 뒤로가기 버튼 */}
            <Button 
                startIcon={<ArrowBackIcon />} 
                onClick={() => navigate('/product/list')} 
                sx={{ mb: 2 }}
            >
                목록으로 돌아가기
            </Button>

            {/* 제품 상세 카드 */}
            <Card component={Paper} elevation={3} sx={{ borderRadius: '12px', padding: '10px' }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                        📦 제품 상세 정보
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        제품 고유 번호: #{productId}
                    </Typography>
                    
                    <Divider sx={{ mb: 2 }} />

                    {/* 백엔드 AS "별칭"에 맞춰 대소문자 정확하게 연결 */}
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>제품명</TableCell>
                                <TableCell>{info.productName || '-'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>브랜드</TableCell>
                                <TableCell>{info.brand || '-'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>가격</TableCell>
                                <TableCell style={{ color: '#d32f2f', fontWeight: 'bold' }}>
                                    {info.price ? `${Number(info.price).toLocaleString()}원` : '-'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>설명</TableCell>
                                <TableCell>{info.description || '설명이 없습니다.'}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                        <Button 
                            variant="contained" 
                            color="warning" // 수정에 자주 쓰이는 주황색/노란색 계열 테마
                            onClick={() => navigate("/product/edit/" + productId)} // 수정 페이지 이동 경로 예시
                            sx={{ fontWeight: 'bold' }}
                        >
                            수정하기
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductView;