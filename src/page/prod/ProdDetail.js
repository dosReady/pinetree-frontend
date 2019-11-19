import React from 'react';
import PageTemplateType1 from '../..//template/PageTemplateType1';
import './Prod.css';
class ProdDetail extends React.Component {
    render() {
        return (
            <PageTemplateType1>
                <div className="prod-detail-wrap">
                    <div className="prod-detail-img"></div>
                    <div className="prod-detail-content">
                        <p>웹 개발자 또는 프론트 엔드 개발자라 불리는 사람들은 요즘 브라우저 내에서 상호작용하는 액션부터 컴퓨터 게임, 데스크탑 위젯, 크로스 플랫폼 모바일 어플리케이션, DB와 연결하는 서버 사이드 코딩 등 모든 것들을 스크립팅 언어로 구현해버립니다. 이렇게 많은 일을 하는 자바스크립트를 더욱 효율적으로 사용할 수 있도록 자바스크립트의 내부 동작을 아는 것이 이 포스팅의 목적입니다.

자바스크립트 환경(ecosystem)은 그 어느 때보다 복잡해졌고 앞으로 더욱 복잡해질 것입니다. 현대적인 모바일 웹앱을 만들기 위해 요구되는 것은 너무나 많습니다. 웹팩, 바벨, ESLint, Mocha, Karma, Grunt ... etc... 우리는 무엇을 사용해야 하고 이 많은 툴들은 무슨 일을 하는 걸까요? 저는 현대 웹 개발자들이 겪고있는 어려움을 완벽히 그려낸 이 웹툰을 찾았습니다.</p>
                        <p>
                        이 모든 것들은 제쳐두고, 모든 자바스크립트 개발자들이 어떤 프레임워크나 라이브러리를 사용하려고 깊이 마음먹기 전에 필요한 것은 루트 레벨에서 이 모든 것들이 어떻게 이루어지는지 그 기초적인 토대에 대해 알아야 한다는 것입니다. 일반적으로 자바스크립트 개발자들은 크롬의 런타임 'V8' 이라는 용어에 대해 들어본 적이 있을 것입니다. 하지만 몇몇 개발자들은 그게 진짜로 의미하는 것과 어떤 일을 하는지에 대해 모릅니다. 저는 직업적인 개발자로서의 커리어의 첫 1년간 이러한 난해한 용어들에 대해 많이 알지 못했고 게다가 첫 1년은 그저 일을 끝내는 것이 우선이었죠. 이런 상황은 자바스크립트는 이 모든 일들을 어떻게 해나가는가에 대한 저의 궁금증을 전혀 해소시켜주지 못했습니다. 저는 더 깊게 파보고 구글링을 더 해보기로 마음먹었습니다. 그리고 Philip Robers(https://twitter.com/philip_roberts), a great talk at JSConf on the event loop(https://www.youtube.com/watch?v=8aGhZQkoFbQ)과 같은 정말 좋은 몇가지 블로그와 사이트들을 발견했고 그 이후 저는 저의 배움을 요약하고 공유하기로 마음먹었습니다. 배울 것들이 많은 관계로 저는 이 포스트를 2개의 파트로 나누기로 결정했습니다. 이 파트에서는 흔히 사용되고 있는 용어들에 대해 소개할 것이고 다음 파트에서는 이 모든 용어들을 연결시켜 보겠습니다.

자바스크립트는 하나의 스레드로 단 1개의 동시성만 다루는 언어입니다. 이것이 의미하는 것은 자바스크립트가 한 번에 1개의 작업만 다룰 수 있다는 얘기죠. 자바스크립트는 힙, 큐와 함께 구성하는 단일 콜스택을 갖습니다. 이것은 V8 내부에 구현되어 있습니다. 여기서 나온 전문용어들을 먼저 살펴봅시다.
                        </p>
                    </div>
                </div>
            </PageTemplateType1>
        )
    }
}

export default ProdDetail;