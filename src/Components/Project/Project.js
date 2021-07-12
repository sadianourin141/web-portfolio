import React from 'react';
import './Project.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ImGithub} from "react-icons/im";

const Project = () => {
    return (
        <div>
           <h2 style={{color:"black",textAlign:"center" ,backgroundColor:"cadetblue"}}>My Projects</h2>
           <Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title><h3>Web Projects</h3></Card.Title>
    <Card.Text>
      <h5>Using html css bootstrap,javascript,reacts etc.</h5>
    </Card.Text>
    <a href="https://github.com/sadianourin141"target="_blank"><Button variant="primary"><h6 style={{color:"white"}}>Go to my github link <ImGithub/></h6></Button></a>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>

<Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title><h3>Arduino Projects</h3></Card.Title>
    <Card.Text>
     <h5>Using Tinkercad Simulation.</h5>
    </Card.Text>
 <a href="https://drive.google.com/file/d/1QMEaEH1bDtAIDSVthItPgobLJ5ubKONd/view?usp=drivesdk"> <Button variant="primary">pptx link 1</Button> </a>
    <a href="https://drive.google.com/file/d/1QUT1Z1gUhRFRqooq5R7-pUXJ-G97TfJr/view?usp=drivesdk"> <Button variant="primary">pptx link 2</Button> </a>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>   
         

<Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title><h3>Solidworks/3D design</h3></Card.Title>
    <Card.Text>
       <h5> Some of my projects in Solidwork16.</h5>
    </Card.Text>
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/213252900_1002431317238221_1643962932493618216_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeH1gRplU2Ztao5x7M1vXvaskzK1ET6X2geTMrURPpfaB1YqDQBY6szqaBuwrJ8eY7Nc4DdZdULBImF2AnDd3PWG&_nc_ohc=CuwZsrFcK3MAX81ZOwF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c77f0049cace3469e7ae1ab0eb0286c6&oe=60F1D429" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/208423311_1024252005064639_4495148034780255333_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEpqgQ3hZROptdUn7bSJek0QaPizoWpy1JBo-LOhanLUu7mO2JNAJUXIUhnI_YPb0feLAU4EL4aqjSTLqeenh52&_nc_ohc=D74xJSLJGxwAX_hyGMm&_nc_oc=AQn8DH9aPvyelDxziTzLzWcluyMhJRwCfQOHjG-DF4F6TvNewYj5obp3W5dOmRlw6VPm0FXwuniM4GTJ4TZ59CFi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2c7ed751338fb27df0b788ada11ea645&oe=60F01F84" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s417x417/213465973_1057214718141462_4197246347438520862_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHWP3OnT-1Pas4GpNiWl1IH61eIfRZ0YDHrV4h9FnRgMX6ZIK92naanyjnVJFVlHPHYroVXJKPP4_rCRZ7oD9GV&_nc_ohc=Gaxzj_-KMpgAX8osvxo&_nc_oc=AQlFuNImnSK5NNgyADmFtSBfd9YIWtHC3CIB61WmSxQ9-E1Rvz1tl91TtnWuL4LFEm0gWQipo81BFXiseUD4bUlg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=90dbaa672e806847e9c0f78917dce5f1&oe=60F0ADC2" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/208565160_1135728043586832_1565610806325115225_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFTOdqozOlGxI3VdBLmPd_KuYYESW5bDYC5hgRJblsNgN6QYEPU_ufP5ZAuO0nEFsHxm0x135XUKNC71SVS78yC&_nc_ohc=q4l6ZrUXTtsAX9RV1BY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=8a705d6ce824aeca84d9f9251db58e60&oe=60F11493" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/215513698_206348094736240_6887635242042405532_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeESVB8Ynk9GMAy7FLt-K8benk3L87cos4SeTcvztyizhJ-3giFgFmPGyCU3ZXrzTUIi7YKc5MRsjICYgnxO60qD&_nc_ohc=GtHYLIA2U8kAX_av5G3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=12fe9b1655a7954c2a6b352d0ab05aa4&oe=60F19CC8" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/205998166_1168889973608426_1228560729039112370_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeG1gN7gzh1cX_5mWnE1YRoltqOb4FGmROe2o5vgUaZE5_oHu443PY-uWXjGUdJuvZTNTHXv2K_I0npxZ3qH9XqT&_nc_ohc=WZ3vjmh4yDcAX8E73vD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4b9e2108d512b37db13995758d56684f&oe=60F083E0" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/211642635_1186276311878893_3848511936095534209_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEoZSNdOdWbF7JxxnWE8-jUItQw4nFO2tIi1DDicU7a0mmbhZYXqHfDOIlMgK2-LiLURrZ2VjsgFgj8s1cptDrA&_nc_ohc=IjmAyOOfzR8AX_43Q9p&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=27adb52edaf5758afdba52a87011fe8a&oe=60F0B81C" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s350x350/213314269_132124815716939_5324950516916609483_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHpTZg6ub89cZa0aj2KG_sJX6P7hR2TUPRfo_uFHZNQ9PUC2-2yKCchxEctj5d6_WIag7hknk3PYGU9OCGZdWo8&_nc_ohc=RxZnzEqPC60AX_242Cm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c1899fd22bfe3f97029da292786ce710&oe=60F0BD77" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/214771066_188498293236101_5498317923856306311_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHQUmpv-_HGuYlghaR7Aicbwx3agsnYQIrDHdqCydhAisuig5J33R726BrSfw7akFYcgo6uSrqAcpVA5XNv2SS8&_nc_ohc=VE1KZNHzDNsAX_c4YVY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9656719b28210d2a958bbba622135dd1&oe=60F0240B" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/206810052_208162164646182_5535226232996293020_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHp97IkOwKjRvWj2aV706TkGysU5T0ig4gbKxTlPSKDiN6V2no9Aqh3KRzg3ch4t1k-sLvfaYYAHKeWjFdufAiS&_nc_ohc=FYTeWQ9TynsAX86fjle&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d94a9b3b6dcd22090d7364f97cb024bf&oe=60F07FDB" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/206607632_337589744595170_7102036116155840466_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeGxUXsumxIaWXJgLqbiRlT8lExlPb9XKtCUTGU9v1cq0KcbK2G4xBBXThjkJrIDkTYzU0FFpwrO3kWNWzmZzs5i&_nc_ohc=hOPCPeWLEIQAX-m5oGH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=dc8fbc7878ad61f3ea4c5c56c7bb72a3&oe=60F1F8A7" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/208574552_342056493986453_6105670075626307167_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFHnxDrVVbp0m7sN_DTe-6YBbJxOH_M8gIFsnE4f8zyAvNU8PYwfsjXC-BQaKDQdpPmL7u05iZ8cuPkaARhaJZl&_nc_ohc=UCZDpXzscL8AX83G2-3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=581c3e96658789a4ee196747bf4ef52f&oe=60F0B2AF" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212442949_359188145600077_1550091166073003856_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeG2TsS7YMo-jhJoDBgWGmm_TMAsKqrd-4RMwCwqqt37hIU0ja9Rmd7r171WqOg86CtSvlOu7AnSnTi2jxmER_7U&_nc_ohc=N0LL3F54gMkAX_xApNs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e39085041fb858ac1b3f6ef9adbbbac8&oe=60F1BD9D" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s370x247/205834538_364080685061431_5338276275098911219_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHKXZXEeUU4g2-UJbJqmk11OQ2mAaoBV8Y5DaYBqgFXxm4WNT6zbRdQO20QV95Gu7wLkOQl1yj3QUV0rnke42Zc&_nc_ohc=Ny8oMB2fyOUAX8BMcKB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7f084d1d613134ee58470428aeb412f5&oe=60F110BD" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s403x403/204816079_499018917990361_2950200885740062275_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeGyLD9FF4qUcKh4tYTJw25AIemxpD5yUdIh6bGkPnJR0v7O0n1hxQ2IS0ph_1XNvss1d7U4a9Pav-1Ig2wSnTtO&_nc_ohc=WQkeuxtc7GoAX_c5sxW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c2e4f767bcf5e70f8c5a5eb57e2deef6&oe=60F06542" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/210458133_501653077758182_4336776156008096665_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFp6T-qqAO7-X632dWPZ_D6siUDhpZMhl2yJQOGlkyGXZjm8B8W3bON_JuPZqW2AnSn6GFezFrcRXR5ceZATNCN&_nc_ohc=MYEhSNC0UXIAX-eEhP4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=eeee4b7dea355de009347ae8913411b2&oe=60F10AC3" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s403x403/215210294_515153006379585_2086966746032640620_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeGZNrjBnTpthdPXc5iJLj1lajfnUBRcLNNqN-dQFFws08qwaNbajDMgWuS5qG3qDvXmzQANYrKHmEsZtc2hCF_N&_nc_ohc=BdGk0QKV92AAX_AW6Yz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1e4f027ea5c0f0e61f4cb6a95100f964&oe=60F0E014" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s320x320/209377205_531620268190914_8023425265054615526_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFeXUcGhhsdj7WF9idshys2QCizw8wXRIxAKLPDzBdEjL_mSKAz824FlI2x8418eJY497PCvG3kuivDTOx9VO9l&_nc_ohc=OGdN0V7M_uoAX8XOlV5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b594be513a6729069c8f5a19c6aee941&oe=60F119C2" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s403x403/202332647_534003078023305_4679701372048116281_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHzW9-mmntCjn2ZPEZPjAgEkhsdgByPNMqSGx2AHI80yu7GlJfQXsG0qi3HBwiKKqv2j8KBsSY-rPQQXJPhVDnH&_nc_ohc=nQ2F3Lo9D6YAX88XwJW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ccc556a177d3e927648dbba553b3d29c&oe=60F2073B" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212545716_551490912872638_5845621595450491064_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEz30X7vzIQmaGq7gXb3y49DW6px5uDC5QNbqnHm4MLlLhwyxpoHuk6XG8XeWCw5xQrnw585OzckvXFDuoZvAx4&_nc_ohc=iiByD_rloF0AX8y-CeG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e29e96e1e07a46a1cac462c23dbc1530&oe=60F0CB0F" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/214738667_555649555448849_824783310201708992_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEE2aFnX4Gj9DSavsgDydVBrkFvdxZtEI-uQW93Fm0Qj2p2QbjT8ayA3jL0Sdf_3L262i4KWbv-222S5lRZ68gK&_nc_ohc=H053ONKondIAX-ur3ZL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=18271618f52a75cf849a957988d0451b&oe=60F0BF8E" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/202963829_785658578787493_1468757898925456471_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEE1VGjkczp0stDqRedPP290HkD5wK2b2nQeQPnArZvaY_oBXiRjO7U2tVpBtCZndeS_QRj8SzkHSvcpqNWU-LJ&_nc_ohc=32tlfmMwzlgAX8sMsm0&_nc_oc=AQl7g6nmPgNwSs3Wjd86zgh443bsxWhgvl_OgH3wmDwlOwJcCeLLwe081z0Ht6Viid_cmxehDBgudiI7T_YOQt37&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7cc358447be67b18fa62873489bc7752&oe=60F1E8DB" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/208751327_805289153520117_5644091299896811415_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEM39b1q0lZSqKgXRsVqNb_Nc4The8IA1c1zhOF7wgDV42fVikfSaGsF1kfqJNq0KjhNIO7vMUWwqV39v7oRHAS&_nc_ohc=KLOoNT9OwLQAX_2Ouxa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=aebb2dcaada3ded6889291b8b64fc3fd&oe=60F1BA7E" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/213885585_857617034853357_3065333975734892750_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeGlY-4l3XUrNVTyqSIh0iAuSvPhyxSYIPZK8-HLFJgg9k1VNj-8sf1ZPoqtbtwzzAyBnzJ3hfnX13sjlqK30RmT&_nc_ohc=k2X8S9WIAT4AX-tpM1l&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f4fd5c2cb222e0b4d3f75e15052342ee&oe=60F1350E" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s350x350/215999117_2893537910912481_2819252581200888977_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFQHVn3WCExfHH78pLJZM7z50g6Zzj1hJ7nSDpnOPWEnqX3NVScH7avs_0uKLTV-rkNngOYHeqOZfyE4JikNOJR&_nc_ohc=8dBU6XBikbsAX_72_lk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a98f647972541f51cf7c26d7e1b46900&oe=60F19089" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/211850281_349810646543833_3543558056565892315_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeGcIhfAS8bxTNAwEjjWPlT-ur32fugomO26vfZ-6CiY7eYf9fET6h-zrH3t6mg1VvHqUC_4RnvvVi1ktNrOYFPb&_nc_ohc=ELBPAW08nOMAX_M9IFa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ecf5cfae42349e5b56a91a10bcbf021f&oe=60F03D49" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s417x417/210325362_505555080533833_4391216530359366056_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHnDpT9Ry_yqnDWk9P-avva1P7d-DFH30PU_t34MUffQ2zjKC0_mHZeNsEz6MbFIAAvuJtybpiBLgex9_LgOdKk&_nc_ohc=KcHbHJfInuQAX-W2kLt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=62f4aafc5059ba576d7b796039a77b80&oe=60F06C88" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s417x417/212401200_509043156984937_8467550570585820348_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeESyTwvnwc333XEPH9Zw-M4Y0dxiFkgw5VjR3GIWSDDlZ7Xdqkm76e_IUxBYCtokV2OKnBp90v1fTU5knr1HO9T&_nc_ohc=rqyt7l6IWmoAX8YUQIX&_nc_oc=AQlb4jCPi6vFFLFPp9qEb0TRyyDPxHSq3UCvqyjbdEAS7yXShdJNQ4zHG8uT26wOU9CJuP5B0-E5QmBTa45m3j5L&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9cd09a4cd6cf750ad5a6f4fdebd3daa4&oe=60F1B8F2" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/205618795_950252532440314_3544133680824473663_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeFeWo-MmiW8-zkHEnn_iABj7Zp0Zer4OM3tmnRl6vg4zcF410xyVVO4CqCN4bnM7SA_gA55yWF1qIE4NqJSsNPd&_nc_ohc=Y6YylS2XUdYAX_cvceS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=41a61179546397f5d01143087a40bc0f&oe=60F051ED" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s417x417/210115357_176813241145856_5781133040947712432_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeEiLKH19gNqL9Kq3Gw8HqB1a8SHJvNwUKFrxIcm83BQode9uPPZrBXjQiCCp-Hkq-u-uh8jcuTErI_aHbOAZ8mC&_nc_ohc=B6QnAItl6d0AX_iBqHK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=045f8dd195e2ad0a76e09d7d529d45cf&oe=60F116A9" alt="" />
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s206x206/214133047_549670819393351_1624365956367746857_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeH8ScR7b3JF7mIhooe1M1GiLVqSOC8gpDotWpI4LyCkOo3bHkVbYP15UKm4mWmF2jHpt8SYwUkKrRkYXJt7o2b9&_nc_ohc=8IdXwCddI1kAX9I9rQS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=8317ad567a90d43f7b3ee9a2d683711e&oe=60F0B448" alt="" />
     
     <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s403x403/202785562_345706017081194_4223029625600423370_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHXicqk2yXyWEwNOSdDrRbuDl4X0YaIwSoOXhfRhojBKr4-SyvsOcaJTJucK96FnBCIW1PAUdlZMhPU7I4prebn&_nc_ohc=gf3OLIacNwYAX9ZPdo6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=28b9dd367a430fcb5fc3cb22ca8b7e40&oe=60F19A0B" alt="" />
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>

        </div>
    );
};

export default Project;