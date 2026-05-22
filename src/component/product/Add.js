import { useEffect, useState } from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function ProductAdd(){
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
        function prodAdd(){
            if(!productId || !productName) {
            alert("제품 번호와 제품명은 필수 입력 항목입니다.");
            return;
        }
            fetch("http://localhost:3010/product",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(
                    {
                        productId: productId,
                        productName: productName,
                        brand: brand,
                        price: price,
                        description: description
                    }
                )
            })
            .then(res => res.json())
            .then(data => {
                console.log("등록 결과:", data);
                if (data.result === "success") {
                    alert("제품이 성공적으로 추가되었습니다!");
                    navigate("/product/list"); 
                } else {
                    alert("등록에 실패했습니다.");
                }
            })
            .catch(err => console.error("데이터 로딩 실패:", err));
        }
    return (
        <Box sx={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: '30px', borderRadius: '12px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#1976d2' }}>
                    📦 새 제품 등록하기
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* 3. value와 onChange를 각 State와 연동 (양방향 바인딩) */}
                    <TextField 
                        label="제품 번호" 
                        variant="outlined" 
                        size="small" 
                        fullWidth
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <TextField 
                        label="제품명" 
                        variant="outlined" 
                        size="small" 
                        fullWidth
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField 
                        label="브랜드" 
                        variant="outlined" 
                        size="small" 
                        fullWidth
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <TextField 
                        label="가격" 
                        variant="outlined" 
                        size="small" 
                        type="number" // 숫자만 입력 가능하도록 설정
                        fullWidth
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField 
                        label="설명" 
                        variant="outlined" 
                        size="small" 
                        multiline // 여러 줄 입력 가능하게 설정
                        rows={3}
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button 
                        variant="contained" 
                        size="large"
                        startIcon={<AddIcon />}
                        onClick={prodAdd}
                        sx={{ mt: 2, height: '45px', fontWeight: 'bold' }}
                    >
                        제품 추가하기
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductAdd;