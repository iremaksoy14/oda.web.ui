export default function() {
  return [
    {
      title: "Kullanıcı Onayı Bekleyenler",
      to: "/dashboard/pendinguser",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Ödeme Onayı Bekleyenler",
      to: "/dashboard/pendingpayment",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Kullanıcılar",
      to: "/dashboard/users",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Paketler",
      to: "/dashboard/packages",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    
  ];
}
