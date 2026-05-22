import { useEffect, useState } from "react";
import '../../App.css';
import { useNavigate, useParams } from "react-router-dom"; // useParams 추가
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save'; // 아이콘을 저장 느낌으로 변경

function ProductEdit(){
    const navigate = useNavigate();
    const { productId: urlProductId } = useParams(); // 👈 URL에서 productId 추출

    // 상태(State) 선언
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // 1. [조회] 컴포넌트가 켜질 때 원래 있던 데이터를 백엔드에서 가져와 바인딩합니다.
    useEffect(() => {
        if (!urlProductId) return;

        fetch("http://localhost:3010/product/" + urlProductId)
            .then(res => res.json())
            .then(data => {
                console.log("기존 데이터 수신:", data);
                if (data.info) {
                    // 말씀하신 .then(data => 여기에 데이터를 각각의 State에 넣어 바인딩합니다.
                    setProductId(data.info.productId || "");
                    setProductName(data.info.productName || "");
                    setBrand(data.info.brand || "");
                    setPrice(data.info.price || "");
                    setDescription(data.info.description || "");
                }
            })
            .catch(err => console.error("기존 데이터 로딩 실패:", err));
    }, [urlProductId]);

    // 2. [수정] 완료 버튼을 눌렀을 때 실행되는 함수
    function prodEdit(){
        if(!productId || !productName) {
            alert("제품 번호와 제품명은 필수 입력 항목입니다.");
            return;
        }

        fetch("http://localhost:3010/product/" + productId, {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                productId: productId,
                productName: productName,
                brand: brand,
                price: price,
                description: description
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("수정 결과:", data);
            if (data.result === "success") {
                alert("제품 정보가 성공적으로 수정되었습니다!");
                navigate("/product/list"); 
            } else {
                alert("수정에 실패했습니다.");
            }
        })
        .catch(err => console.error("데이터 수정 실패:", err));
    }

    return (
        <Box sx={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: '30px', borderRadius: '12px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#1976d2' }}>
                    📝 제품 정보 수정하기
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* 💡 disabled 속성을 부여하여 번호 수정을 막아줍니다. */}
                    <TextField 
                        label="제품 번호" 
                        variant="outlined" 
                        size="small" 
                        fullWidth
                        disabled
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
                        type="number" 
                        fullWidth
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField 
                        label="설명" 
                        variant="outlined" 
                        size="small" 
                        multiline 
                        rows={3}
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button 
                        variant="contained" 
                        size="large"
                        color="warning" // 수정 화면의 정체성에 맞게 주황색 테마 적용
                        startIcon={<SaveIcon />}
                        onClick={prodEdit} // 💡 파라미터를 넘기지 않고 기존 State를 그대로 사용하게 변경했습니다.
                        sx={{ mt: 2, height: '45px', fontWeight: 'bold' }}
                    >
                        수정 완료하기
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductEdit;