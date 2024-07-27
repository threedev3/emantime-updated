import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Description, Field, Input, Select } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import whiteLogo from "../../assets/img/whitelogo.png";
import useFormHandler from "../../hooks/useFormHandler";
import PhoneInputComp from "../PhoneInput/PhoneInputComp";

export default function TrialModal({ openModal, setOpenModal }) {
  // const [phone, setPhone] = useState("");

  const onSuccess = () => {
    setOpenModal(false);
  };

  const {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    course,
    setCourse,
    enrollFor,
    setEnrollFor,
    errors,
    handleSubmit,
    loading,
  } = useFormHandler();

  return (
    <Transition appear={true} show={openModal}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={setOpenModal}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="relative w-full mx-5 max-w-lg rounded-xl bg-gradient-to-r from-green-100 to-gray-200 backdrop-blur-2xl">
                <button
                  className="absolute top-3 right-3 text-white hover:text-gray-700 z-30"
                  onClick={() => setOpenModal(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                <div className="flex justify-center items-center bg-gradient-to-r from-btnGradRight to-btnGradLeft rounded-t-xl p-6">
                  <img src={whiteLogo} alt="" />
                </div>
                <div className="p-8 max-h-[480px] overflow-y-auto no-scrollbar">
                  <DialogTitle
                    as="h3"
                    className="sm:text-3xl text-2xl font-semibold  bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text text-center"
                  >
                    Start Your 7 Day Trial
                  </DialogTitle>
                  <p className="my-4 sm:text-base text-sm text-black text-center">
                    Get Enrolled Now and find some special and amazing discounts
                  </p>
                  <div className="w-full max-w-sm mx-auto px-4">
                    <form onSubmit={(e) => handleSubmit(e, onSuccess)}>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Full Name"
                          className={clsx(
                            "mt-3 block w-full rounded-lg bg-white py-1.5 pl-[60px] pr-3 text-sm/6 text-black",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="absolute top-1.5 left-3 w-6 fill-btnGradRight"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {errors.fullName && (
                        <p className="text-red-600 text-sm mt-2">
                          {errors.fullName}
                        </p>
                      )}
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="Email Address"
                          className={clsx(
                            "mt-3 block w-full rounded-lg bg-white py-1.5 pl-[60px] pr-3 text-sm/6 text-black",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="absolute top-1.5 left-3 w-6 fill-btnGradRight"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                      <div className="mt-3">
                        <div className="block w-full rounded-lg sm:py-0.5 py-1 px-3 text-black shadow-sm sm:text-sm sm:leading-6 bg-white">
                          <PhoneInputComp value={phone} onChange={setPhone} />
                        </div>
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-2">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <Select
                          className={clsx(
                            "mt-3 block w-full appearance-none rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                            // Make the text of each option black on Windows
                            "*:text-black"
                          )}
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Course
                          </option>
                          <option value="tajweed course">Tajweed Course</option>
                          <option value="seerat-al-nabawi course">
                            Seerat Al Nabwi Course
                          </option>
                          <option value="one-to-one counselling sessions">
                            One-To-One Councelling Session
                          </option>
                          <option value="one-to-one quren recitation course">
                            One-To-One Quran Recitation Course
                          </option>
                          <option value="quran memorization course">
                            Quran Memorization Course
                          </option>
                          <option value="islamic studies course">
                            Islamic Studies Classes
                          </option>
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                          aria-hidden="true"
                        />
                        {errors.course && (
                          <p className="text-red-600 text-sm mt-2">
                            {errors.course}
                          </p>
                        )}
                      </div>

                      <div
                        className={clsx(
                          "mt-3 block w-full rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                      >
                        <div className="sm:flex sm:flex-row sm:items-center sm:gap-5 flex flex-col gap-2">
                          <div>
                            <span className="text-gray-700 text-sm">
                              I Want To Enroll For?
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <label className="flex items-center space-x-1 cursor-pointer">
                              <input
                                type="radio"
                                name="enroll"
                                value="myself"
                                checked={enrollFor === "myself"}
                                onChange={() => setEnrollFor("myself")}
                                className="text-green-500 focus:ring-green-500"
                              />
                              <span className="text-sm">My Self</span>
                            </label>
                            <label className="flex items-center space-x-1 cursor-pointer">
                              <input
                                type="radio"
                                name="enroll"
                                value="mychild"
                                checked={enrollFor === "mychild"}
                                onChange={() => setEnrollFor("mychild")}
                                className="text-green-500 focus:ring-green-500"
                              />
                              <span className="text-sm">My Child</span>
                            </label>
                          </div>
                        </div>
                        {errors.enrollFor && (
                          <p className="text-red-600 text-sm mt-2">
                            {errors.enrollFor}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 flex justify-center">
                        <Button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 w-32 rounded-lg bg-gradient-to-r from-btnGradRight to-btnGradLeft py-2.5 px-4 text-base font-medium text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white "
                          disabled={loading}
                        >
                          {loading ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="animate-spin h-8 w-8"
                              fill="white"
                            >
                              <path
                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                opacity=".25"
                              />
                              <path
                                d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                className="spinner_ajPY"
                              />
                            </svg>
                          ) : (
                            "Get Enrolled"
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
