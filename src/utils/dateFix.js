function appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }

export default function dateFix(oldDate) {
    let date = new Date(oldDate);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[date.getMonth()]} ${appendLeadingZeroes(date.getDate())}, ${date.getFullYear()}`;
    
}