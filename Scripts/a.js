function a ()
{
    console.log("HI");
    let a = arguments.callee.caller.name;
    console.log(a);
    console.log(typeof(a))
}
// function b()
// {
//     a();
// }
// b();
a();
