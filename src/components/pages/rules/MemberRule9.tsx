/**
 * Renders member rule 9
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule9 component
 */
const MemberRule9: React.FC = () => (
    <MemberRule index={9} header="当社ウェブサイトの利用について">
        <u>クッキー（cookie）について</u>
        <p>
            本サービスでは、クッキー（cookie）と呼ばれる、会員のコンピューターを識別するためのデータを送付し、ハードディスクに記録することがあります。会員から取得したクッキーについては、本サービスの利便性を高めるために必要な範囲内でのみ使用し、当該利用以外の用途では使用しません。
            ※会員は、使用するインターネット閲覧ソフト（ブラウザ）の設定を変更することにより、本サービスから送付されるクッキーの受取りを拒否することができます。ただし、これにより本サービスが正常に利用できない場合があります。
        </p>
        <br />
        <u>携帯識別子（UID）について（携帯のみ）</u>
        <p>
            本サービスでは、会員が使用する携帯電話を識別する、個体識別情報（UID）と呼ばれるデータを送付し、当社の管理するハードディスクに記録することがあります。なお、個体識別情報（UID）は、会員個人を識別するものではありません。
            会員は、使用する携帯電話のUID通知設定を変更することにより、携帯電話からUIDが通知されないようにすることができます。ただし、これにより本サービスが正常にご利用頂けない場合があります。
        </p>
        <br />
        <u>ログについて</u>
        <p>
            本サービスでは、会員のアクセス状況や操作の情報をアクセスログという形で記録する場合があります。当社では、このログを会員から提供された情報と合わせ、お客様へのサービス向上、万一問題が発生した際の原因調査、利用状況に関する統計・分析処理という当社の利用目的に必要な範囲で使用し、当該利用目的以外の用途では使用しません。
        </p>
        <br />
        <u>リンク先について</u>
        <p>
            当社は、本サービスにおいて、会員のプライバシーを保護するための最大限の努力をするものとします。ただし、本サービスのページ上にあるリンク先の第三者企業においては、当社ウェブサイトの責任範囲外となり、その第三者企業が設定するプライバシーポリシーに準じることとなります。
        </p>
        <br />
        <u>SSLについて</u>
        <p>
            本サービスでは、個人情報が送受信されるページにおいては、SSL（SecureSocketLayer）
            による暗号化通信を使用し、会員の個人情報を外部の第三者が通信傍受できないよう対策を行っています。
        </p>
    </MemberRule>
)

export default MemberRule9
