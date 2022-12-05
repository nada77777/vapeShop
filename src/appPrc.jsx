import React from 'react';
import { useState } from 'react';

const AppPrc = (props) => {
    const [items, setItems] = useState([
        // {
        //     "title": "[VPS] 피치 홀릭 0.3 (폐호흡)",
        //     "id": "1312",
        //     "price": 35000,
        //     "sale": 24000,
        //     "percent": 32,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_zummev.jpg",
        //     "description": "빠져나올수 없는 진한 복숭아의 늪 !"
        // },
        // {
        //     "title": "[VPS] 피치 홀릭 0.98 (입호흡)",
        //     "id": "13122",
        //     "price": 35000,
        //     "sale": 22000,
        //     "percent": 38,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_p_fw6pjw.jpg",
        //     "description": "빠져나올수 없는 진한 복숭아의 늪 !"
        // },
        // {
        //     "title": "[머스트] 피치 망고 0.98 (입호흡)",
        //     "id": "131772",
        //     "price": 30000,
        //     "sale": 22000,
        //     "percent": 27,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/Must_cepfic.jpg",
        //     "description": "애플망고와 복숭아맛 액상!"
        // },
        // {
        //     "title": "[카디날] 자바 0.98 (입호흡)",
        //     "id": "1315462",
        //     "price": 35000,
        //     "sale": 24000,
        //     "percent": 32,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730404/liquid/primera_u2oxfq.jpg",
        //     "description": "크림과 원두커피의 환상 조합 !"
        // },
        // {
        //     "title": "[네스티] 쿠반 0.98 (입호흡)",
        //     "id": "1313151112",
        //     "price": 30000,
        //     "sale": 22000,
        //     "percent": 27,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%EC%BF%A0%EB%B0%98_bjzcbb.jpg",
        //     "description": "연초와 견과류맛 액상!"
        // },
        // {
        //     "title": "[펠릭스] 라임 라임 0.97 (입호흡)",
        //     "id": "1315416542",
        //     "price": 35000,
        //     "sale": 21000,
        //     "percent": 40,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%ED%8E%A0%EB%A6%AD%EC%8A%A4_i8w6lw.jpg",
        //     "description": "다시 돌아온 믿고 먹는 라임 라임 !"
        // },
        // {
        //     "title": "[돔페] 하이민트 아이스 피치 0.98 (입호흡)",
        //     "id": "1312445545485",
        //     "price": 35000,
        //     "sale": 25000,
        //     "percent": 29,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EB%8F%94%ED%8E%98_z1tzoe.jpg",
        //     "description": "쿨피스 복숭아맛 액상!"
        // },
        // {
        //     "title": "[에딕트] 로젤 하트 0.98 (입호흡)",
        //     "id": "1312fdsa666",
        //     "price": 36000,
        //     "sale": 24000,
        //     "percent": 34,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%EC%97%90%EB%94%95%ED%8A%B8_qyhijf.jpg",
        //     "description": "히비스커스와 시트러스맛 액상!"
        // },
        // {
        //     "title": "[블랙유니콘] 포도 0.98 (입호흡)",
        //     "id": "13bbrf12",
        //     "price": 35000,
        //     "sale": 27000,
        //     "percent": 23,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EB%B8%94%EB%9E%99%EC%9C%A0%EB%8B%88%EC%BD%98_pxpgjw.jpg",
        //     "description": "타격감 끝판왕 블랙유니콘 !"
        // },
        // {
        //     "title": "[잽쥬스] AISU 알로에 베라 0.3 (폐호흡)",
        //     "id": "13aaa12",
        //     "price": 35000,
        //     "sale": 25000,
        //     "percent": 29,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EC%9E%BD%EC%A5%AC%EC%8A%A4_ymef5i.jpg",
        //     "description": "신선한 알로에 쥬스맛 액상!"
        // },
        // {
        //     "title": "[파이브폰즈] 캐슬롱 0.99 (입호흡)",
        //     "id": "13efdxgg12",
        //     "price": 40000,
        //     "sale": 30000,
        //     "percent": 25,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%ED%8C%8C%EC%9D%B4%EB%B8%8C%ED%8F%B0%EC%A6%88_wftryn.jpg",
        //     "description": "코코넛과 아몬드 캬라멜등 연초류 액상 !"
        // },
        // {
        //     "title": "[네스티] 하이민트 슬로우 블로우 0.98 (입호흡)",
        //     "id": "13sdfsfw12",
        //     "price": 34000,
        //     "sale": 22000,
        //     "percent": 36,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EB%84%A4%EC%8A%A4%ED%8B%B0_cg7dhx.jpg",
        //     "description": "파인애플 주스와 레몬에이드가 포함된 액상!"
        // },
        // {
        //     "title": "[고드름] 소다 0.98 (입호흡)",
        //     "id": "1sfeefx312",
        //     "price": 30000,
        //     "sale": 20000,
        //     "percent": 34,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EA%B3%A0%EB%93%9C%EB%A6%84_hutw9f.jpg",
        //     "description": "시원한 고드름 아이스크림맛 액상!"
        // },
        // {
        //     "title": "[블리자드] 아이스 야쿠르트 0.98 (입호흡)",
        //     "id": "13fdsfdf12",
        //     "price": 30000,
        //     "sale": 22000,
        //     "percent": 27,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EB%B8%94%EB%A6%AC%EC%9E%90%EB%93%9C_kjtsfu.jpg",
        //     "description": "어릴적 먹던 야쿠르트를 담은 상큼달달 액상!"
        // },
        // {
        //     "title": "[비바체] 몰디브 0.98 (입호흡)",
        //     "id": "1aa312",
        //     "price": 35000,
        //     "sale": 21000,
        //     "percent": 40,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/%EB%B9%84%EB%B0%94%EC%B2%B4_skysxf.jpg",
        //     "description": "깔끔한 멘솔과 상큼한 레몬의 조화 !"
        // },
        // {
        //     "title": "[한야] 아이스 콜라 0.98 (입호흡)",
        //     "id": "13sdfsdf12",
        //     "price": 35000,
        //     "sale": 21000,
        //     "percent": 40,
        //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%ED%95%9C%EC%95%BC_xbv6an.jpg",
        //     "description": "청량감 있는 멘솔 콜라 액상!"
        // }
        {}]);
    const obj =
    // {
    //     "title": "[VPS] 피치 홀릭 0.3 (폐호흡)",
    //     "id": "1312",
    //     "price": 35000,
    //     "sale": 24000,
    //     "percent": 32,
    //     "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_zummev.jpg",
    //     "description": "빠져나올수 없는 진한 복숭아의 늪 !"
    // };
    {
        "title": "[VPS] 피치 홀릭 0.98 (입호흡)",
        "id": "13122",
        "price": 35000,
        "sale": 22000,
        "percent": 38,
        "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_p_fw6pjw.jpg",
        "description": "빠져나올수 없는 진한 복숭아의 늪 !"
    };
    const onClick = () => {
        // setItems(items.map((item) => {
        //     if (item.id === obj.id) {
        //         console.log('ss');
        //         return { ...item, new: 'aaaaaaaaaaaaaa' };
        //     }
        //     console.log('nn');
        //     return item;
        // }));
        const result = items.map((item) => {
            if (item.id === obj.id) {
                return { ...item, obj };
            }
            console.log('sssss');
            return obj;
        });

        setItems((items) => [...items, result]);
        console.log(obj);

    };
    console.log(items);
    return (
        <>
            <h1 onClick={onClick}>prc</h1>
            <ul>
                {items.map((item) => <li key={item.id}><p>{item.title}___________________{item.id}</p></li>)}
            </ul>
        </>


    );
};

export default AppPrc;



